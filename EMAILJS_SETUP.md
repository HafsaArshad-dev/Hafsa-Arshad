# EmailJS Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

### Step 2: Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email service)
4. Connect your Gmail account
5. Copy the **Service ID** (looks like: `service_xxxxxxx`)

### Step 3: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

**Subject:** New Portfolio Contact from {{from_name}}

**Content:**
```
Hello Hafsa,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and copy the **Template ID** (looks like: `template_xxxxxxx`)

### Step 4: Get Public Key
1. Go to **Account** > **General**
2. Copy your **Public Key** (looks like: `xxxxxxxxxxxxxxx`)

### Step 5: Update Your Code
Replace these values in `components/Contact.tsx`:

```javascript
const serviceId = 'service_your_service_id' // Replace with your Service ID
const templateId = 'template_your_template_id' // Replace with your Template ID  
const publicKey = 'your_public_key' // Replace with your Public Key
```

### Step 6: Test
1. Save the file
2. Go to your portfolio
3. Fill out the contact form
4. Check your email!

## Free Plan Limits
- 200 emails per month
- Perfect for portfolio websites

## Alternative: Simple Mailto Link
If you prefer, I can also set up a simple mailto link that opens the user's email client instead of sending emails directly.

---

**That's it! Your contact form will work without any server setup or app passwords! 🎉**

