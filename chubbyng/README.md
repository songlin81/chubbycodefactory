[1] setup npm:
    $ npm config set registry http://registry.npm.taobao.org/
    linsong@linsongdeMacBook-Air chubbycodefactory % npm config list

[2] Init ng project:
    linsong@linsongdeMacBook-Air chubbycodefactory % ng new chubbyng  
    linsong@linsongdeMacBook-Air chubbycodefactory % cd chubbyng 
    linsong@linsongdeMacBook-Air chubbyng % ng build
    linsong@linsongdeMacBook-Air chubbyng % ng serve -o

[3] Revision of port number
    In angular.json, add below inside "serve":
        "host": "localhost",
        "port": 5000

[4] MD
    linsong@linsongdeMacBook-Air chubbyng % ng add @angular/material
    ? Choose a prebuilt theme name, or "custom" for a custom theme: Deep Purple/Amber
    ? Set up HammerJS for gesture recognition? Yes
    ? Set up browser animations for Angular Material? Yes

[5] new component
    linsong@linsongdeMacBook-Air chubbyng % ng g c dashboard --module=app

[6] 