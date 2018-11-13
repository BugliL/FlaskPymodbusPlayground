from pymodbus.client.sync import ModbusTcpClient as ModbusClient
from time import sleep

mClientScrittura = ModbusClient(host='192.168.1.26', port=502)
mClient = ModbusClient(host='192.168.1.26', port=503)
mClient.connect()

# Address known that expose data
addr = 8195

reg = mClient.read_coils(addr - 1, 1, unit=1)
Q3 = reg.getBit(0)
print("(Readed first) Q3:" + str(Q3))
sleep(2)

reg = mClient.write_coil(addr - 1, 1, unit=1)
Q3 = reg.value
print("(Writed) Q3:" + str(Q3))
sleep(2)

reg = mClient.read_coils(addr - 1, 1, unit=1)
Q3 = reg.getBit(0)
print("(Readed) Q3:" + str(Q3))
