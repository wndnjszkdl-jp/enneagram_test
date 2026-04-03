from flask import Flask, render_template, request, jsonify
import sqlite3
from datetime import datetime

app = Flask(__name__)

DB_NAME = "enneagram.db"


def init_db():
    conn = sqlite3.connect(DB_NAME)
    cur = conn.cursor()

    cur.execute("""
        CREATE TABLE IF NOT EXISTS test_results (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            phone TEXT NOT NULL,
            result_type INTEGER NOT NULL,
            result_name TEXT NOT NULL,
            result_keyword TEXT NOT NULL,
            result_summary TEXT NOT NULL,
            created_at TEXT NOT NULL
        )
    """)

    conn.commit()
    conn.close()


init_db()


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/submit", methods=["POST"])
def submit():
    try:
        data = request.get_json()

        name = data.get("name", "").strip()
        phone = data.get("phone", "").strip()
        result_type = data.get("result_type")
        result_name = data.get("result_name", "").strip()
        result_keyword = data.get("result_keyword", "").strip()
        result_summary = data.get("result_summary", "").strip()

        print("받은 데이터:", data)
        print("name:", name, "phone:", phone, "result_type:", result_type,
              "result_name:", result_name, "result_keyword:", result_keyword,
              "result_summary:", result_summary)

        if (
            not name or
            not phone or
            result_type is None or
            not result_name or
            not result_keyword or
            not result_summary
        ):
            return jsonify({
                "success": False,
                "message": "입력값 부족"
            }), 400

        conn = sqlite3.connect(DB_NAME)
        cur = conn.cursor()

        cur.execute("""
            INSERT INTO test_results
            (name, phone, result_type, result_name, result_keyword, result_summary, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, (
            name,
            phone,
            result_type,
            result_name,
            result_keyword,
            result_summary,
            datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        ))

        conn.commit()
        conn.close()

        return jsonify({
            "success": True,
            "message": "저장 완료"
        })

    except Exception as e:
        print("에러 발생:", e)

        return jsonify({
            "success": False,
            "message": str(e)
        }), 500


@app.route("/list")
def list_data():
    conn = sqlite3.connect(DB_NAME)
    cur = conn.cursor()

    cur.execute("""
        SELECT id, name, phone, result_type, result_name, result_keyword, created_at
        FROM test_results
        ORDER BY id DESC
    """)
    rows = cur.fetchall()

    conn.close()

    return str(rows)


if __name__ == "__main__":
    app.run(debug=True)
