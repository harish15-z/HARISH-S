
import React from 'react';
import type { ApiCategory } from './types';
import { LockIcon, UserIcon, ContactsIcon, LeadsIcon, PipelineIcon, TaskIcon, EmailIcon, GenAIIcon, AnalyticsIcon, TeamIcon, BellIcon, PlugIcon } from './components/Icons';

export const API_CATEGORIES: ApiCategory[] = [
  {
    title: 'Authentication',
    icon: <LockIcon />,
    phase: 'Phase 1',
    endpoints: [
      { method: 'POST', path: '/auth/signup', description: 'Create a new user account.' },
      { method: 'POST', path: '/auth/login', description: 'Authenticate a user and return a token.' },
      { method: 'POST', path: '/auth/logout', description: 'Invalidate the current session or token.' },
      { method: 'POST', path: '/auth/forgot-password', description: 'Send a password reset email or OTP.' },
      { method: 'POST', path: '/auth/reset-password', description: 'Reset the user\'s password with a valid token.' },
    ],
  },
  {
    title: 'User & Settings',
    icon: <UserIcon />,
    phase: 'Phase 1',
    endpoints: [
      { method: 'GET', path: '/user/me', description: 'Get the profile of the currently authenticated user.' },
      { method: 'PUT', path: '/user/me', description: 'Update the profile information for the current user.' },
      { method: 'GET', path: '/settings', description: 'Fetch user or organization-specific settings.' },
      { method: 'PUT', path: '/settings', description: 'Update settings like timezone, notifications, or integrations.' },
    ],
  },
  {
    title: 'Contacts',
    icon: <ContactsIcon />,
    phase: 'Phase 1',
    endpoints: [
      { method: 'GET', path: '/contacts', description: 'Retrieve a list of all contacts.' },
      { method: 'POST', path: '/contacts', description: 'Add a new contact to the CRM.' },
      { method: 'GET', path: '/contacts/{id}', description: 'Get the detailed information for a specific contact.' },
      { method: 'PUT', path: '/contacts/{id}', description: 'Update an existing contact\'s information.' },
      { method: 'DELETE', path: '/contacts/{id}', description: 'Delete a contact from the CRM.' },
    ],
  },
  {
    title: 'Leads',
    icon: <LeadsIcon />,
    phase: 'Phase 1',
    endpoints: [
      { method: 'GET', path: '/leads', description: 'List all leads with optional filters for status or source.' },
      { method: 'POST', path: '/leads', description: 'Add a new lead to the CRM.' },
      { method: 'GET', path: '/leads/{id}', description: 'Get detailed information for a specific lead.' },
      { method: 'PUT', path: '/leads/{id}', description: 'Update a lead\'s information or status.' },
      { method: 'DELETE', path: '/leads/{id}', description: 'Delete a lead from the CRM.' },
      { method: 'POST', path: '/leads/{id}/notes', description: 'Add a new note to a specific lead.' },
      { method: 'GET', path: '/leads/{id}/notes', description: 'Fetch all notes associated with a lead.' },
    ],
  },
  {
    title: 'Pipeline & Deals',
    icon: <PipelineIcon />,
    phase: 'Phase 1',
    endpoints: [
      { method: 'GET', path: '/pipeline', description: 'Get all pipeline stages and the deals within them.' },
      { method: 'POST', path: '/pipeline/stage', description: 'Add a new stage to the sales pipeline.' },
      { method: 'PUT', path: '/pipeline/stage/{id}', description: 'Update a stage\'s name or order.' },
      { method: 'DELETE', path: '/pipeline/stage/{id}', description: 'Remove a stage from the pipeline.' },
      { method: 'POST', path: '/deals', description: 'Create a new deal, typically linked to a lead or contact.' },
      { method: 'PUT', path: '/deals/{id}', description: 'Update a deal\'s stage, value, or other properties.' },
      { method: 'DELETE', path: '/deals/{id}', description: 'Delete a deal.' },
    ],
  },
  {
    title: 'Tasks & Reminders',
    icon: <TaskIcon />,
    phase: 'Phase 1',
    endpoints: [
      { method: 'GET', path: '/tasks', description: 'List tasks with filters like due date or completion status.' },
      { method: 'POST', path: '/tasks', description: 'Create a new task.' },
      { method: 'PUT', path: '/tasks/{id}', description: 'Update an existing task.' },
      { method: 'DELETE', path: '/tasks/{id}', description: 'Delete a task.' },
    ],
  },
  {
    title: 'Emails & Communication',
    icon: <EmailIcon />,
    phase: 'Phase 2',
    endpoints: [
      { method: 'POST', path: '/emails/draft', description: 'Generate a new email draft using a Gen AI model.' },
      { method: 'POST', path: '/emails/send', description: 'Send an email to a contact or lead.' },
      { method: 'GET', path: '/emails/history/{leadId}', description: 'Fetch the email communication history for a lead.' },
      { method: 'POST', path: '/messages/send', description: 'Send a WhatsApp or SMS message via an integrated service.' },
    ],
  },
  {
    title: 'Gen AI',
    icon: <GenAIIcon />,
    phase: 'Phase 2',
    endpoints: [
      { method: 'POST', path: '/ai/lead-score', description: 'Use AI to predict the conversion score of a lead.' },
      { method: 'POST', path: '/ai/email-suggest', description: 'Generate a personalized outreach email for a lead.' },
      { method: 'POST', path: '/ai/followup-suggest', description: 'Suggest the optimal follow-up timing and message.' },
      { method: 'POST', path: '/ai/meeting-summary', description: 'Upload a transcript to get an AI summary and action items.' },
      { method: 'POST', path: '/ai/insights', description: 'Analyze the sales pipeline and generate actionable insights.' },
    ],
  },
  {
    title: 'Reports & Analytics',
    icon: <AnalyticsIcon />,
    phase: 'Phase 1',
    endpoints: [
      { method: 'GET', path: '/analytics/leads', description: 'Get analytics on leads created, converted, and lost.' },
      { method: 'GET', path: '/analytics/revenue', description: 'Get revenue forecasts and closed deal values.' },
      { method: 'GET', path: '/analytics/source', description: 'Analyze lead performance by source (e.g., LinkedIn, Website).' },
      { method: 'GET', path: '/analytics/team', description: 'Get performance metrics for team members.' },
    ],
  },
  {
    title: 'Team Management',
    icon: <TeamIcon />,
    phase: 'Phase 3',
    endpoints: [
      { method: 'GET', path: '/team/members', description: 'List all members of the team.' },
      { method: 'POST', path: '/team/members', description: 'Invite a new member to the team.' },
      { method: 'PUT', path: '/team/members/{id}', description: 'Update a team member\'s role (e.g., Admin, Sales).' },
      { method: 'DELETE', path: '/team/members/{id}', description: 'Remove a member from the team.' },
      { method: 'POST', path: '/team/assign-lead', description: 'Assign a lead to a specific team member.' },
    ],
  },
  {
    title: 'Notifications',
    icon: <BellIcon />,
    phase: 'Phase 2',
    endpoints: [
      { method: 'GET', path: '/notifications', description: 'List all notifications for the current user.' },
      { method: 'POST', path: '/notifications/mark-read', description: 'Mark one or more notifications as read.' },
    ],
  },
  {
    title: 'Integrations',
    icon: <PlugIcon />,
    phase: 'Phase 3',
    endpoints: [
      { method: 'POST', path: '/integrations/gmail/connect', description: 'Connect a user\'s Gmail account.' },
      { method: 'POST', path: '/integrations/whatsapp/connect', description: 'Connect a WhatsApp business account.' },
      { method: 'GET', path: '/integrations/status', description: 'Check the status of connected integrations.' },
    ],
  },
];
