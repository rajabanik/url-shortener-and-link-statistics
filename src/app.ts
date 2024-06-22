import express from 'express';
import shortenUrlRoutes from './routes/url/shortenUrlRoutes';
import redirectUrlRoutes from './routes/url/redirectUrlRoutes';
import getUrlStatisticsRoutes from './routes/url/getUrlStatisticsRoutes';

const app = express();

//port
const PORT = process.env.PORT || 4000;

//middleware
app.use(express.json());

app.get('/',(req,res)=>{
  res.send("welcome to the App")
})
app.use('/', shortenUrlRoutes);
app.use('/', redirectUrlRoutes);
app.use('/', getUrlStatisticsRoutes);

console.log(`Using port: ${PORT}`);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


export default app;
