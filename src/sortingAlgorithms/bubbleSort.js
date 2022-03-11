import { COLORS } from "../App"
import { updateAndDelay } from "./helperFuncs"

export async function bubbleSort(array, dispatch, speed) {
    console.log(dispatch)
    var copiedArray = array.slice()
    var sorted = false
    var indexingLength = copiedArray.length - 1
    while (!sorted) {
        var changed = false;
        for (var i = 0; i < indexingLength; i++) {
            copiedArray[i].color = COLORS.FOCUSED
            copiedArray[i+1].color = COLORS.FOCUSED
            
            await updateAndDelay(dispatch, copiedArray, speed) 
            
            if (copiedArray[i].value > copiedArray[i+1].value) {
                changed = true;
                copiedArray[i].color = COLORS.INCORRECT
                copiedArray[i+1].color = COLORS.INCORRECT
                
                await updateAndDelay(dispatch, copiedArray, speed) 
                
                var smaller = copiedArray[i].value
                copiedArray[i].value = copiedArray[i+1].value
                copiedArray[i+1].value = smaller
                
                await updateAndDelay(dispatch, copiedArray, speed) 
                
                copiedArray[i].color = COLORS.FOCUSED
                copiedArray[i+1].color = COLORS.FOCUSED  
                
                await updateAndDelay(dispatch, copiedArray, speed) 
            }
            copiedArray[i].color = COLORS.DEFAULT
            copiedArray[i+1].color = COLORS.DEFAULT   
        }
        copiedArray[indexingLength].color = COLORS.FINAL 
        
        await updateAndDelay(dispatch, copiedArray, 0)
        
        indexingLength --
        if (!changed) {
            sorted = true
        }
    }
    
    copiedArray.forEach((element) => {
        element.color = COLORS.FOCUSED
    })
    
    await updateAndDelay(dispatch, copiedArray, 1000)
    
    copiedArray.forEach((element) => {
        element.color = COLORS.FINAL
    })
    
    await updateAndDelay(dispatch, copiedArray, 0)
} 


