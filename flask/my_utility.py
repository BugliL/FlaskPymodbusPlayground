from pymodbus.client.sync import ModbusTcpClient as ModbusClient
import datetime

mClient = ModbusClient(host='192.168.1.26', port=503)

d = {}
level = 0
levelp = 0
liv = 0
start = False
i = 0


def get_data():
    global liv, start, i, d

    tempo = str(datetime.datetime.now()).split('.')[0]
    readedCoil1 = mClient.read_coils(8192, 1)
    readedCoil2 = mClient.read_coils(8193, 1)
    readedCoil3 = mClient.read_coils(8256, 1)
    readedCoil4 = mClient.read_coils(8257, 1)
    readedCoil5 = mClient.read_coils(8259, 1)
    readedCoil6 = mClient.read_coils(8260, 1)
    readedCoil7 = mClient.read_coils(8261, 1)
    readedRegister1 = mClient.read_holding_registers(528, 1)
    # readedRegister2 = mClient.read_holding_registers(533, 1)
    q1 = readedCoil1.getBit(0)
    q2 = readedCoil2.getBit(0)
    L = readedRegister1.getRegister(0)
    P = bool(q1)
    # t = int(readedRegister2.getRegister(0))
    E = bool(q2)
    S2 = readedCoil6.getBit(0)
    S3 = readedCoil5.getBit(0)

    if P:
        if (not S2) and (not S3) and (not E):
            liv = 10*i
            i += 1
        elif S2 and (not S3) and (not E):
            liv = 10*i + 300
            i += 1
        elif S3 and S2:
            i = 0
            liv = 450
        elif E:
            liv = -2 * i + 450
            i += 1

    d = {
        'timestamp': tempo,
        'Q1': str(q1),
        'Q2': str(q2),
        'Q1_feedback': str(readedCoil3.getBit(0)),
        'Q2_feedback': str(readedCoil4.getBit(0)),
        'S1': str(readedCoil7.getBit(0)),
        'S2': str(S2),
        'S3': str(S3),
        'liv_logo': str(L),
        'liv_teorico': str(liv),
        't': str(i),
        't2': str(liv),
        't3': str(liv),
    }
    return d