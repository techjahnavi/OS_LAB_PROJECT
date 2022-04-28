var check = 0; // Counting Semaphore
var mutex = 1; // Binary Semaphore
var $output = $("#textArea");

// Up Function
function down(check, consumed) {
  check -= consumed;
  return check;
}

// Down Function
function up(check) {
  check++;
  return check;
}

function producer() {
  var space = document.getElementById("bufferSize").value;
  var produced_items = document.getElementById("nProducers").value;
  var items_added = document.getElementById("added");
  space++;

  if (mutex == 1) {
    down(mutex, 1);
    if (parseInt(check) + parseInt(produced_items) >= space) {
      alert("Buffer Size should be greater than the items to be produced");
    } else {
      for (var i = 1; i <= produced_items; i++) {
        var o =
          '<button type="button" class="btn ml-3 my-2 third" id = ' +
          (check + 1) +
          ' onclick="add_entry(this.id)">' +
          "Process" +
          (check + 1) +
          "</button>";
        check = up(check);
        items_added.innerHTML += o;

        $output.append("Items Produced " + i + "\n");
      }
    }
    up(mutex);
  }
}

function consumer() {
  var space = document.getElementById("bufferSize").value;
  var consumed_items = document.getElementById("nConsumers").value;

  space++;

  if (mutex == 1) {
    down(mutex);
    if (check - consumed_items >= 0) {
      for (var i = check; i > check - consumed_items; i--) {
        var x = document.getElementById(i);
        x.remove();
        $output.append("Items consumed " + i + "\n");
      }
      check = down(check, consumed_items);
    } else {
      alert("Items consumed should be less than the items produced");
    }
    up(mutex);
  }
}

function producerConsumer() {
  executeBTN.style.visibility = "hidden";
  producer();
  consumer();
  
}

