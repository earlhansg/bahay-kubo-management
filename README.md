# bahay-kubo-management
A system to track the condo buildings, the units within each building and the owners or renters of such units.


#### How to run

````
 $ npm run install:all    - Installs all package.json from express & angular
 
 $ npm run ng:start       - Runs angular at http://localhost:4200
 $ npm run node:start     - Runs express at http://localhost:3000
 $ npm run start          - Runs both angular and express
````


#### Babel and tsconfig paths support on Node and Angular

```
AVOID:
On node    : import {} from '../../shared/enums/tables/user'
On angular : import {} from './app.component'

INSTEAD USE:
import {} from '@app/enums';
import {} from '@app/app.component'   or '@app/user/user.component'


NOTE:
- These are set on the respective tsconfig.json on your Node (./tsconfig.json) 
and Angular (./public/ng-app/tsconfig.json)

- If you want to customized and support some directories, you can do so 
by updating both the .babelrc and tsconfig.json of express or angular
```
 

