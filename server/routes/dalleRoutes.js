import * as dotenv from 'dotenv';
import express from 'express';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || !prompt.trim()) {
      return res.status(400).json({ success: false, message: 'Prompt is required' });
    }

    const aiResponse = await openai.createImage({
      model: 'dall-e-2',
      prompt,
      n: 1,
      size: '1024x1024',
    });

    const imagePayload = aiResponse.data?.data?.[0];
    const image = imagePayload?.b64_json || imagePayload?.url;

    if (!image) {
      return res.status(500).json({
        success: false,
        message: 'No image was returned by the OpenAI API.',
      });
    }

    res.status(200).json({ success: true, photo: image });
  } catch (error) {
    console.error('DALL-E error:', error?.response?.data || error);
    res.status(500).json({
      success: false,
      message: error?.response?.data?.error?.message || error?.message || 'Something went wrong',
    });
  }
});

export default router;