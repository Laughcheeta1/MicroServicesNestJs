import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('GatewayController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should create a new liquor item', async () => {
    const response = await request(app.getHttpServer())
      .post('/gateway/createLiquor')
      .send({ name: 'Test Liquor', price: 50 });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('should fetch all liquor items', async () => {
    const response = await request(app.getHttpServer()).get('/gateway/findAllLiquor');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should fetch a single liquor item by ID', async () => {
    const response = await request(app.getHttpServer()).get('/gateway/findOneLiquor/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('id', 1);
  });

  it('should update a liquor item', async () => {
    const response = await request(app.getHttpServer())
      .post('/gateway/updateLiquor')
      .send({ id: 1, name: 'Updated Liquor', price: 60 });
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name', 'Updated Liquor');
  });

  it('should delete a liquor item by ID', async () => {
    const response = await request(app.getHttpServer()).post('/gateway/removeLiquor/1');
    expect(response.status).toBe(200);
  });

  // Similar tests for Event Service methods
  it('should fetch all events', async () => {
    const response = await request(app.getHttpServer()).get('/gateway/findAllEvents');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should create a new event', async () => {
    const response = await request(app.getHttpServer())
      .post('/gateway/createEvent')
      .send({ name: 'Test Event', date: '2024-12-01' });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  // And so on for other Event Service endpoints...
});
