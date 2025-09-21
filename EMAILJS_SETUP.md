# EmailJS Setup Guide

## 🚀 Quick Setup Steps

### 1. Create EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email

### 2. Create Email Service
- Go to Email Services
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the connection steps

### 3. Create Email Template
- Go to Email Templates
- Click "Create New Template"
- Set up your template with these variables:
  ```
  From: {{from_name}} <{{from_email}}>
  To: your-email@gmail.com
  Subject: Portfolio Contact from {{from_name}}
  
  Message:
  {{message}}
  
  Reply to: {{reply_to}}
  ```

### 4. Get Your Credentials
- **Service ID**: Found in Email Services section
- **Template ID**: Found in Email Templates section  
- **Public Key**: Found in Account > API Keys

### 5. Add to Environment
- Copy `.env.example` to `.env`
- Replace the placeholder values:
  ```
  REACT_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
  REACT_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
  REACT_APP_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
  ```

### 6. Test Your Form
- Restart your development server
- Fill out the contact form
- Check your email for the message!

## 📧 Template Variables Used
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Contact message
- `{{to_name}}` - Your name (Pranay Saketh)
- `{{reply_to}}` - Reply-to email

## 🎯 Features Implemented
- ✅ Real email sending via EmailJS
- ✅ Form validation
- ✅ Loading states
- ✅ Success/error notifications
- ✅ Environment variable configuration
- ✅ Professional UI feedback

## 🔧 Troubleshooting
- Ensure all environment variables are set
- Check EmailJS dashboard for delivery status
- Verify email template syntax
- Check browser console for errors