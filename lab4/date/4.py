import datetime
dt = datetime.datetime.now()
print("Before:", dt)
print("After:", dt.replace(microsecond=0))