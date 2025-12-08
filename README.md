# FiveM-DoorPopper
A Simple Script for FiveM Servers to use to Open the back left door of an emergency vehicle to act as a K9 "Door Popper"


## A Simple K9 Door Popper Script for FiveM

## How To Use
The default keybind is **E**. But this is changeable inside of the **client.js** file. I reconmend changing it due to the fact that **E** is commonly used for Your horn and flashlights as well as other items.
## Changing Keybind
1. Go to The [FiveM Control Refrence Sheet](https://docs.fivem.net/docs/game-references/controls/)
2. Pick a Control. Such as **E** and grab the number. For example **E = 184**
3. Update line 14 with the new number For Example
```javascript
setTick(async() => {
    if(IsControlJustPressed(0, **184**)) { // Key bind is 184 which is currently E
        if(GetVehicleClass(lastVehicle) == 18) {
            if(!IsVehicleDoorDamaged(lastVehicle, 2)) 
```
And replace **"184"** With the number of your choice. (you can also map it in Fivem under Settings > Keybinds > Fivem) 
4. Then Drag the **fxmanifest.lua** file and **client.js** file into a folder inside of the **resources** folder and start the resource.

## And You're Done :D



## FAQ
<details>
  <summary>How do i remap for a different door</summary>
    


  - simply take **SetVehicleDoorLatched(lastVehicle, 2, true, true)**
    and replace **2** with any number between **0 and 5**

    - 0 is front driver
    - 1 is rear driver
    - 2 is 

</details>
