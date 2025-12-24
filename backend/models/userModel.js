const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: function () {
        return !this.googleId; // Required if googleId isn’t there
        }
    },
    googleId: {
        type: String,
        default: null
    },
    cartData: {
        type: Object,
        default: {}
    }
    }, { minimize: false });

    // static signup method
    userSchema.statics.signup = async function(name, email, password) {
    if (!name || !email || !password) {
        throw Error('All fields must be filled');
    }
    if (!validator.isEmail(email)) {
        throw Error('Invalid email');
    }
    const exists = await this.findOne({ email });
    if (exists) {
        throw Error('Email already in use');
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ name, email, password: hash });
    return user;
    };

    // static login method
    userSchema.statics.login = async function(email, password) {
    if (!email || !password) {
        throw Error('All fields must be filled');
    }
    const user = await this.findOne({ email });
    if (!user) {
        throw Error('Incorrect email');
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error('Incorrect password');
    }
    return user;
};

module.exports = mongoose.model('User', userSchema);
