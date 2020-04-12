import mongoose from 'mongoose';
import IMongoDB from './IMongoDB';

class MongodBase implements IMongoDB {
  createConnection(): void {
      mongoose.connect(
      'mongodb://localhost/gearappi',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
  }
}

export default MongodBase;
