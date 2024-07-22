class Admin {
    constructor(name) {
        this.role = 'admin';
        this.name = name;
    }

    getPermissions() {
        return ['read', 'write', 'delete'];
    }

}

class Editor {
    constructor(name) {
        this.role = 'editor';
        this.name = name;
    }

    getPermissions() {
        return ['read', 'write'];
    }
}

class Viewer {
    constructor(name) {
        this.role = 'viewer';
        this.name = name;
    }

    getPermissions() {
        return ['read'];
    }
}



class UserFactory {
    createUser(role, name) {
      switch (role) {
        case 'admin':
          return new Admin(name);
        case 'editor':
          return new Editor(name);
        case 'viewer':
          return new Viewer(name);
      }
    }
  }


const userFactory = new UserFactory();

const admin = userFactory.createUser('admin', 'mohran');
console.log(admin.role , admin.name); 
console.log(admin.getPermissions());

const editor = userFactory.createUser('editor', 'ahmed');
console.log(editor.role , editor.name); 
console.log(editor.getPermissions());


const viewer = userFactory.createUser('viewer', 'Charlie');
console.log(viewer.role , viewer.name); 
console.log(viewer.getPermissions());
