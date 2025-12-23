
import React from 'react';
import { Camera, Heart, User, Calendar, Box } from 'lucide-react';
import { Photo, Service } from './types';

export const COLORS = {
  primary: '#0f0f0f',
  secondary: '#f5f5f5',
  accent: '#c9a24d',
  accentMuted: 'rgba(201, 162, 77, 0.2)',
};

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Wedding Photography',
    description: 'Capturing your timeless love stories with a cinematic touch.',
    icon: 'Heart',
    price: 'Starting at $2,500',
  },
  {
    id: '2',
    title: 'Portraits & Fashion',
    description: 'High-end editorial photography for models and professionals.',
    icon: 'User',
    price: 'Starting at $450',
  },
  {
    id: '3',
    title: 'Event Coverage',
    description: 'Documenting your milestones and corporate gatherings.',
    icon: 'Calendar',
    price: 'Starting at $800',
  },
  {
    id: '4',
    title: 'Product Photography',
    description: 'Elevate your brand with crisp, high-contrast product visuals.',
    icon: 'Box',
    price: 'Starting at $300',
  },
  {
    id: '5',
    title: 'Pre-Wedding Shoots',
    description: 'Intimate storytelling before your big day.',
    icon: 'Camera',
    price: 'Starting at $1,200',
  }
];

export const PORTFOLIO: Photo[] = [
  { id: 'p1', title: 'The Vow', category: 'Weddings', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069' },
  { id: 'p2', title: 'Urban Chic', category: 'Fashion', url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073' },
  { id: 'p3', title: 'Serenity', category: 'Portraits', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964' },
  { id: 'p4', title: 'Tech Gala', category: 'Events', url: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070' },
  { id: 'p5', title: 'Luxe Glass', category: 'Products', url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999' },
  { id: 'p6', title: 'Ethereal Gown', category: 'Weddings', url: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070' },
  { id: 'p7', title: 'Minimal Watch', category: 'Products', url: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1999' },
  { id: 'p8', title: 'Street Echo', category: 'Fashion', url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2020' },
  { id: 'p9', title: 'Deep Soul', category: 'Portraits', url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974' },
];
