import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, company, interest } = req.body;
      
      // Validate required fields
      if (!name || !email || !interest) {
        return res.status(400).json({ 
          message: "Name, email, and interest are required fields" 
        });
      }
      
      // Here you would typically:
      // 1. Send an email to the company
      // 2. Store the contact request in a database
      // 3. Possibly trigger a CRM workflow
      
      // Example response
      res.status(200).json({ 
        success: true, 
        message: "Thank you for your inquiry! We will contact you shortly." 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        message: "Failed to process your request. Please try again later." 
      });
    }
  });

  // Demo request endpoint
  app.post('/api/request-demo', async (req, res) => {
    try {
      const { name, email, company, preferredDate } = req.body;
      
      // Validate required fields
      if (!name || !email) {
        return res.status(400).json({ 
          message: "Name and email are required fields" 
        });
      }
      
      // Here you would typically schedule a demo in your calendaring system
      
      res.status(200).json({ 
        success: true, 
        message: "Your demo has been scheduled! You will receive a confirmation email shortly." 
      });
    } catch (error) {
      console.error("Error scheduling demo:", error);
      res.status(500).json({ 
        message: "Failed to schedule your demo. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
