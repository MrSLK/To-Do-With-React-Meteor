import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { TasksCollection } from '/imports/db/TasksCollection';
import { ServiceConfiguration } from 'meteor/service-configuration';
import '/imports/api/tasksMethods';
import '/imports/api/tasksPublications';

const insertTask = (taskText, user) =>
  TasksCollection.insert({
    text: taskText,
    userId: user._id,
    createdAt: new Date(),
  });

const SEED_USERNAME = 'shibk';
const SEED_PASSWORD = 'shiba123';

Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  const user = Accounts.findUserByUsername(SEED_USERNAME);

  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task',
    ].forEach(taskText => insertTask(taskText, user));
  }
});

ServiceConfiguration.configurations.upsert(
  { service: 'github' },
  {
    $set: {
      loginStyle: 'popup',
      clientId: '9a0b05f478d549c28aa7', // insert your clientId here
      secret: '769f4d7bf8c2b3f38165021718b94c1d436dd952', // insert your secret here
    },
  }
);

ServiceConfiguration.configurations.remove({
  service: "facebook"
});

ServiceConfiguration.configurations.insert({
  service: "facebook",
  appId: '440569234616513',
  secret: '14349ab1095d2d8bba623f16f7acdef9'
});

Accounts.onCreateUser(function (options, user) {

  if (!user.services.facebook) {
      return user;
  }
  user.username = user.services.facebook.name;
  user.emails = [{address: user.services.facebook.email}];

  return user;
});