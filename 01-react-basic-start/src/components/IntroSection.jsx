// export default () => {
//     return (
//         <section>
//             <h1 className="centered">Заголовок Н1</h1>
//                 <h3 className="centered" style={{color:'#666'}}>
//                     Загловок Н2
//                 </h3>
//         </section>
//     )
// }

import React from 'react';
export default () => {
    return React.createElement('section', null, [
        React.createElement('h1',{className:'centered',key: 1},'Result University'),
        React.createElement('h3',{className:'centered',key: 2,style: {color:'#666'}},'Result University  H3')]);

    }