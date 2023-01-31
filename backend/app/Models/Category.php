<?php

namespace App\Models;

use App\Models\Pin;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model
{
    use HasFactory, SoftDeletes;


    public function pins()
    {
        return $this->hasMany(Pin::class);
        // or return $this->hasMany(Pin::class, 'category_id', 'id');
    }
}
