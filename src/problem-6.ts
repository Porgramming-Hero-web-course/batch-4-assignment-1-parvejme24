interface Profile {
  name: string;
  age: number;
  email: string;
}

function updateProfile(profile: Profile, updates: Partial<Profile>): Profile {
  return { ...profile, ...updates };
}

// function checking 
// =====================
const myProfile = { name: "Jhankar Mahbub", age: 250, email: "jhankar@mahbub.com" };
console.log(updateProfile(myProfile, { age: 60 }));

