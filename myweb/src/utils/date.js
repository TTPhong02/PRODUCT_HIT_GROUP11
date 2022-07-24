const date = (item) => item.toString().slice(8,10) + ' Th '+ item.toString().slice(5,7) +', '+ item.toString().slice(0,4)  
export default date