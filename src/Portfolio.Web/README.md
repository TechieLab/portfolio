# portfolio

<PropertyGroup>
    <VisualStudioVersion Condition="'$(VisualStudioVersion)' == ''">14.0</VisualStudioVersion>
    <VSToolsPath Condition="'$(VSToolsPath)' == ''">$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)</VSToolsPath>

	<!--Add below lines inorder to prevent typescript compliation-->

    <TypeScriptCompileBlocked>true</TypeScriptCompileBlocked>
    <TypeScriptCompileOnSaveEnabled>False</TypeScriptCompileOnSaveEnabled>

	<!-------------------->
</PropertyGroup>

#Most commently user angular modules

import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule }   from '@angular/forms';
import {BrowserModule } from '@angular/platform-browser';
import {createPlatformFactory, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {Component} from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

#Most commonly used Angular Component/features



#Angular Syntex and Conventions.........We need to follow

<div *ngIf="condition">...</div>
<div template="ngIf condition">...</div>
<template [ngIf]="condition"><div>...</div></template>

