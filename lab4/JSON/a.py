
import json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
json_path = BASE_DIR / "sample-data.json"

try:
    with open(json_path, "r", encoding="utf-8") as f:
        data = json.load(f)
except FileNotFoundError:
    raise SystemExit(f"Файл не найден: {json_path}")
except json.JSONDecodeError as e:
    raise SystemExit(f"Ошибка в формате JSON: {e}")

print("Interface Status")
print("=" * 50)
print("DN")
print("-" * 50)

for item in data.get("imdata", []):
    attrs = item.get("l1PhysIf", {}).get("attributes", {})
    print(attrs.get("dn", "<no-dn>"))

print("\nOnly adminSt=up")
print("-" * 50)
for item in data.get("imdata", []):
    attrs = item.get("l1PhysIf", {}).get("attributes", {})
    if attrs.get("adminSt") == "up":
        print(attrs.get("dn", "<no-dn>"))
