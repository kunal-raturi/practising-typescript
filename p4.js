var Status;
(function (Status) {
    Status[Status["inactive"] = 0] = "inactive";
    Status[Status["active"] = 1] = "active";
    Status[Status["pending"] = 2] = "pending";
})(Status || (Status = {}));
var currentStatus = Status.pending;
console.log(currentStatus);
