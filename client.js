let lastVehicle;
let lastAction = 1

setTick(async() => {
    if(IsPedInVehicle(PlayerPedId(), GetVehiclePedIsIn(PlayerPedId(), true))) {
        let vehicle = GetVehiclePedIsIn(PlayerPedId(), true)
        if(GetPedInVehicleSeat(vehicle, -1) == GetPlayerPed(-1)) {
            lastVehicle = vehicle
        }
    }
})

setTick(async() => {
    if(IsControlJustPressed(0, 184)) { // Key bind is 184 which is currently E
        if(GetVehicleClass(lastVehicle) == 18) {
            if(!IsVehicleDoorDamaged(lastVehicle, 2)) {
                if(lastAction == 2) {
                    SetVehicleDoorLatched(lastVehicle, 2, true, true)
                    SetNotificationTextEntry("STRING")
                    AddTextComponentString(`~w~Vehicle Door Status: ~r~Closed`)
                    DrawNotification(true, false)
                    lastAction = 1
                } else if(lastAction == 1) {
                    SetVehicleDoorOpen(lastVehicle, 2, false, false)
                    SetNotificationTextEntry("STRING")
                    AddTextComponentString(`~w~Vehicle Door Status: ~g~Opened`)
                    DrawNotification(true, false)
                    lastAction = 2
                }
            } else {
                SetNotificationTextEntry("STRING")
                AddTextComponentString(`~r~Can't close a door that doesn't exist.`)
                DrawNotification(true, false)
            }
        }
    }
})
