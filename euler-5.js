function isDivisible() {
  var counter = 2, divisible = false;
  while (!divisible) {
    if (counter % 2 == 0) {
      if (counter % 3 == 0) {
        if (counter % 4 == 0) {
          if (counter % 5 == 0) {
            if (counter % 6 == 0) {
              if (counter % 7 == 0) {
                if (counter % 8 == 0) {
                  if (counter % 9 == 0) {
                    if (counter % 10 == 0) {
                      if (counter % 11 == 0) {
                        if (counter % 12 == 0) {
                          if (counter % 13 == 0) {
                            if (counter % 14 == 0) {
                              if (counter % 15 == 0) {
                                if (counter % 16 == 0) {
                                  if (counter % 17 == 0) {
                                    if (counter % 18 == 0) {
                                      if (counter % 19 == 0) {
                                        if (counter % 20 == 0) {
                                          divisible = true;
                                          return counter;
                                        }
                                      }  
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    counter++;
  }
}

console.log(isDivisible());