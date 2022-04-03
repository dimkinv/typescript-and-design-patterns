class User { }
class UserPersistenceService {
    saveUser(user: User) { }
}

// the problem!
export class UserService {
    private userPersistenceService: UserPersistenceService;
    constructor() {
        this.userPersistenceService = new UserPersistenceService();
    }

    saveUser(user: User) {
        this.userPersistenceService.saveUser(user);
    }
}
const userService = new UserService();
userService.saveUser({});


// the naive solution

export class UserService {
    constructor(private userPersistenceService: UserPersistenceService) { }

    saveUser(user: User) {
        this.userPersistenceService.saveUser(user);
    }
}
const userService = new UserService(new UserPersistenceService());
userService.saveUser({});

// better solution
export class UserService {
    constructor(private userPersistenceService: UserPersistenceService) { }

    saveUser(user: User) {
        this.userPersistenceService.saveUser(user);
    }
}
const userPersistenceService = injector.get(UserPersistenceService);
const userService = new UserService(userPersistenceService);
userService.saveUser({});

// best solution
@injectable()
export class UserPersistenceService(){
}

@injectable()
export class UserService {
    constructor(@inject() private userPersistenceService: UserPersistenceService) { }

    saveUser(user: User) {
        this.userPersistenceService.saveUser(user);
    }
}
const userService = injector.get(UserService);
userService.saveUser({});
