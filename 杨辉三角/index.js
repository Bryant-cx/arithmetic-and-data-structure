function triangle (num) {
    const res = []
    if (num < 1) return []
    
    for (i = 1; i < num + 1; i++) {
      res.push(getTriangleArr(i))
    }
    
    return res
    
    function getTriangleArr (n) {
      if (n === 1) {
        return [1]
      }
      
      if (n === 2) {
        return [1, 1]
      }
      
      let temp = getTriangleArr(n - 1)
      let len = temp.length
      const res = []
      temp.forEach((i, idx) => {
        if (idx < len - 1) {
          res.push(i + temp[idx + 1])
        }
      })
      res.push(1)
      res.splice(0, 0, 1)
      return res
    }
  }