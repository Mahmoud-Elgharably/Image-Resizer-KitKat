import supertest from 'supertest';
import app from '..';

const request = supertest(app);

describe('Test endpoint responses (GET /api/images?fnm=santamonica&wdt=650&hit=400)', () => {
    it('Status should be 200', async () => {
        const response = await request.get('/api/images?fnm=santamonica&wdt=650&hit=400');
        expect(response.status).toBe(200);
    });
});

describe('Test endpoint responses (GET /api/images)', () => {
    it('Status should be 422', async () => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(422);
    });
});
