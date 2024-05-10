function tableSearch() {
    
    var td, i, txtValue;

    var input = document.getElementById("search");
    var search = input.value.toUpperCase();
    var table = document.getElementById("properti-table");
    var tr = table.getElementsByTagName("tr");
  
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(search) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
}

function sortKolomTable(n) {
    var rows, changeSign, i, x, y, changeCount = 0;
    var table = document.getElementById("properti-table");
    var changeBool = true;

    var arahSort = "asc";
    
    while (changeBool) {
      
      changeBool = false;
      rows = table.rows;
      
      for (i = 1; i < (rows.length - 1); i++) {
        
        changeSign = false;
        
        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];
        
        if (arahSort == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            
            changeSign = true;
            break;
          }
        } else if (arahSort == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            
            changeSign = true;
            break;
          }
        }
      }

      if (changeSign) {
       
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        changeBool = true;

        changeCount ++;
      } else {
            if (changeCount == 0 && arahSort == "asc") {
            arahSort = "desc";
            changeBool = true;
            }
      }
    }
}

function sortKolomTableAngka(n) {
    var rows, changeSign, i, x, y, changeCount = 0;
    var table = document.getElementById("properti-table");
    var changeBool = true;
    
    while (changeBool) {
      
        console.log('while')
      changeBool = false;
      rows = table.rows;
      
      for (i = 1; i < (rows.length - 1); i++) {
        console.log('for')

        changeSign = false;
        
        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];
        
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
            console.log('if1')

            changeSign = true;
            break;
        }
      }

      if (changeSign) {
        console.log('if2')

        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        changeBool = true;

        changeCount ++;
      } 
    }
}
