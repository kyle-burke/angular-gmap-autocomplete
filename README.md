# AngularJS 1.x Autocomplete directive for AngularUI Google Map module
This incredibly specific directive makes attaching an Autocomplete dropdown
to an `<input>` element a little easier. The directive has bindings to expose
the autocomplete object and `places_changed` Google Maps event callback.

Example:
```
<input type="text"
       gmap-autocomplete
       gmap-autocomplete-model="vm.autocomplete"
       gmap-autocomplete-callback="vm.callback()">
```