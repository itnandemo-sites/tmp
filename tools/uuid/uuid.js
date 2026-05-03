        function generateUUID() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        document.addEventListener('DOMContentLoaded', function() {
            var uuid = generateUUID();
            document.getElementById('uuid-output').innerText = "UUID生成(" + uuid + ")";
            console.log("JavaScript executed successfully. Generated UUID: " + uuid);
        });