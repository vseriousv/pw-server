import mongoose from 'mongoose';
import IMongoDB from './IMongoDB';
import config from '../config';

class MongodBase implements IMongoDB {
    createConnection(): void {
        mongoose.connect(
            `mongodb+srv://${config.mongoUser}:${config.mongoPass}@pw-test-ja0q7.mongodb.net/test?retryWrites=true&w=majority`,
            {
            useNewUrlParser: true,
            useUnifiedTopology: true
            }
        );
    }
}

export default MongodBase;
