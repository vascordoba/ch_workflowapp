class ProfileModel {
  constructor(id, name, alias, picture) {
    this.id = id.toString();
    this.name = name;
    this.alias = alias;
    this.picture = picture;
  }
}

export default ProfileModel;