import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userModel = mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    password: { type: String, trim: true, required: true },
    profilePic: {
      type: String,
      required: true,
      default:
        "https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png",
    },
  },
  { timestamps: true }
);

userModel.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userModel.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 12);
});

export const User = mongoose.model("User", userModel);
