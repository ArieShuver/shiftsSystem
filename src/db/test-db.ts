import sequelize from './db.config';
import { User } from './modle/userModle';

async function testDB() {
    try {
        // מוודא חיבור למסד
        await sequelize.authenticate();
        console.log('✅ Connection established successfully');

        // יצירת משתמש לדוגמה
        const newUser = await User.create({
            name: 'Test User',
            email: 'testuser@example.com',
            password: '123456',
            role: 'admin'
        });

        console.log('✅ User created:', newUser.toJSON());

        // קריאת כל המשתמשים
        const users = await User.findAll();
        console.log('📜 All users:', users.map(u => u.toJSON()));

    } catch (error) {
        console.error('❌ Error testing DB:', error);
    } finally {
        await sequelize.close(); // סוגר חיבור בסיום
    }
}

testDB();
