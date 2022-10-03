import 'reflect-metadata';
import app from './bootstrap';

app.listen(app.get('port'), () => {
    console.log('Server on port:', app.get('port'));
});