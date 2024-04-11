'use server'

import connectMongoDB from "./mongodb"
import Topic from "@/models/topic"

export const getTopics = async() => {
    try {
      connectMongoDB.connect();
      const topics = await Topic.find({},null, {sort: {createdAt: -1}});
      return topics;
    } catch (error) {
        throw new Error ("Failed To Get Topics " + error);
    }
}


export const getTopic = async (id) => {
    try {
      connectMongoDB.connect();
        const topic = await Topic.findById(id);
        return topic;
    } catch (error) {
        throw new Error ("Failed To Get Topic " + error);
    }
}

