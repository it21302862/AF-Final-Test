// tests/room.test.js

const mongoose = require('mongoose');
const app = require('../index');
const Room = require('../model/2019.room.model');
const request = require('supertest');

describe('GET/rooms',()=>{
    beforeAll(async () => {
        const url ="'mongodb://localhost:27017/test_db";
        await mongoose.connect(url);
    });

    afterAll(async()=>{
        await mongoose.connection.close();
    });

    it('should return all rooms',async()=>{
        const response = await request(app).get('/rooms');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});