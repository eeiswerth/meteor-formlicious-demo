if (Meteor.isClient) {

  var _data = new ReactiveVar(null);

  Template.demo.helpers({
    myOptions: function() {
      return {
        showSpinnerOnSubmit: true,
        spinnerUrl: '/img/spinner.gif',
        data: {
          field1: 'My data',
          field5: true,
          field6: [true, false, true],
          field7: [true, false, true]
        },
        fields: [
          {
            name: 'field1',
            title: 'My textarea',
            type: 'textarea',
            maxlength: 500,
            validator: Formlicious.validators.stringValidator
          },
          {
            name: 'field2',
            title: 'My input field',
            type: 'input',
            required: true,
            maxlength: 5
          },
          {
            name: 'field13',
            title: 'My date',
            type: 'date'
          },
          {
            name: 'field3',
            title: 'Credit Card',
            type: 'credit-card',
            validator: Formlicious.validators.creditCardValidator
          },
          {
            name: 'field4',
            title: "Credit Card Expiration",
            type: 'credit-card-expiration',
            validator: Formlicious.validators.creditCardExpirationValidator
          },
          {
            name: 'field5',
            title: "Checkbox",
            text: 'Check me',
            type: 'checkbox'
          },
          {
            name: 'field6',
            title: "Checkbox Group",
            type: 'checkbox-group',
            fields: [
              {text: "Checkbox 1"},
              {text: "Checkbox 2"},
              {text: "Checkbox 3"}
            ]
          },
          {
            name: 'field7',
            title: "Radio Group",
            type: 'radio-group',
            fields: [
              {text: "Radio 1"},
              {text: "Radio 2"},
              {text: "Radio 3"}
            ]
          },
          {
            name: 'field8',
            title: 'Uploads',
            type: 'dropzone',
            required: true,
            options: {
              addRemoveLinks: true
            }
          },
          {
            name: 'field9',
            title: 'File upload',
            type: 'file-upload',
            required: true,
            removeText: 'Remove',
            buttonText: 'Upload',
            width: 500
            //accept: 'image/*'
          }
        ],
        buttons: [
          {
            text: 'Reset',
            classes: 'btn-warning',
            callback: function(api, result, data) {
              api.reset();
            }
          },
          {
            text: 'Save',
            classes: 'btn-primary',
            disableOnClick: true,
            type: 'submit',
            callback: function(api, result, data) {
              if (!result.valid) {
                api.hideSpinner();
                api.enable();
                return;
              }
              setTimeout(function() {
                api.hideSpinner();
                api.enable();
                _data.set(JSON.stringify(data, null, 2));
              }, 3000);
            }
          }
        ]
      }
    }
  });

  Template.demoFormData.helpers({
    hasData: function() {
      return _data.get() != null;
    },
    data: function() {
      return _data.get();
    }
  });
}