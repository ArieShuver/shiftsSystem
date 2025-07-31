import { User } from "./modle/userModle";

class DbService {
  async create(data: any) {
    try {
      return await User.create(data);
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  async findAll() {
    try {
      return await User.findAll();
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  }

  async findById(id: number) {
    try {
      return await User.findByPk(id);
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      throw error;
    }
  }

  async update(id: number, data: any) {
    try {
      const user = await User.findByPk(id);
      if (!user) return null;
      return await user.update(data);
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      const user = await User.findByPk(id);
      if (!user) return null;
      await user.destroy();
      return true;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  }
}

export default DbService;
