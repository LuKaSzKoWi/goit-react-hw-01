


// import React from 'react';
// import Profile from './components/Profile/Profile';
// import userData from './userData.json';

// const App = () => (
//   <div>
//     <Profile
//       name={userData.username}
//       tag={userData.tag}
//       location={userData.location}
//       image={userData.avatar}
//       stats={userData.stats}
//     />
//   </div>
// );

// export default App;




// import React from 'react';
// import FriendList from './components/FriendList/FriendList';
// import friends from './friends.json';

// const App = () => {
//   return (
//     <div>
//       <FriendList friends={friends} />
//     </div>
//   );
// };

// export default App;




// import React from 'react';
// import transactions from './transactions.json';
// import TransactionHistory from './components/TransactionHistory/TransactionHistory';

// const App = () => {
//   return (
//     <div>
//       <TransactionHistory items={transactions} />
//     </div>
//   );
// };

// export default App;


import React from 'react';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
