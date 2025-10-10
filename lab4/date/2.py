import datetime
today = datetime.date.today()
print("Yesterday:", today - datetime.timedelta(days=1))
print("Today:", today)
print("Tomorrow:", today + datetime.timedelta(days=1))