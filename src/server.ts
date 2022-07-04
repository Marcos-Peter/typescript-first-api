import { app } from './app';

const port = process.env.PORT || 4050;

const server = app.listen(port, () => {
  console.log(`[server]: Running at https://localhost:${port}`);
});

process.on('SIGINT', () => {
  console.log('[server]: Shutting down');
  server.close;
})
