var address = new function() {
	  this.contactList = document.getElementById('contacts');
	  this.contacts = [];

	  this.Count = function(data) {
	    var counter = document.getElementById('counter');
	    var name = 'contact';
	    if (data) {
	      if (data > 1) {
	        name = 'contacts';
	      }
	      counter.innerHTML = data + ' ' + name ;
	    } else {
	      counter.innerHTML = 'No ' + name;
	    }
	  };
	  
	  this.FetchAll = function() {
	    var data = '';
	    if (this.contacts.length > 0) {
	      for (i = 0; i < this.contacts.length; i++) {
	        data += '<tr>';
	        data += '<td>' + this.contacts[i] + '</td>';
	        data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
	        data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
	        data += '</tr>';
	      }
	    }
	    this.Count(this.contacts.length);
	    return this.contactList.innerHTML = data;
	  };

	  this.Add = function () {
	    // Get the value
	    var contact = document.getElementById('add-name').value + " " + document.getElementById('add-pno').value;;
	    if (contact) {
	      // Add the new value
	      this.contacts.push(contact.trim());
	      // Reset input value
	      //el = '';
	      document.getElementById('add-name').value = " ";
	      document.getElementById('add-pno').value = " ";
	      // Dislay the new list
	      this.FetchAll();
	    }
	  };

	  this.Edit = function (item) {
	    var contactName = document.getElementById('edit-name');
	    var contactNumber = document.getElementById('edit-pno');
	    // Display value in the field
	    var con = this.contacts[item].split(" ");
	    contactName.value = con[0];
	    contactNumber.value = con[1];
	    // Display fields
	    document.getElementById('spoiler').style.display = 'block';
	    self = this;
	    document.getElementById('saveEdit').onsubmit = function() {
	      // Get value
	      var contact = contactName.value + " " + contactNumber.value;
	      if (contact) {
	        // Edit value
	        self.contacts.splice(item, 1, contact.trim());
	        // Display the new list
	        self.FetchAll();
	        // Hide fields
	        CloseInput();
	      }
	    }
	  };

	  this.Delete = function (item) {
	    // Delete the current row
	    this.contacts.splice(item, 1);
	    // Display the new list
	    this.FetchAll();
	  };
	  
	}
	address.FetchAll();
	function CloseInput() {
	  document.getElementById('editForm').style.display = 'none';
	}