<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAvatar extends Model
{
    use HasFactory;

    protected $fillable = [

        'user_id',
        'avatar_image',
        'avatar_image_miniature'

    ];
}
