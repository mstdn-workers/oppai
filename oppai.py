#!/usr/bin/env python
# -*- coding: utf-8 -*-
# vim:fileencoding=utf-8

class Oppai:
    """An oppai nurse class"""
    def __init__(self):
        self._milk = 0

    def __init__(self, milk):
        self._milk = milk

    def touch(self):
        return "やん"

    def nurse(self, milk):
        self._milk -= milk

    def showVolOfMilk(self):
        print "milk: ", self._milk, " ml"
        print


print "Make 100 ml oppai"
pai = Oppai(100)
pai.showVolOfMilk()

print "Nurse 45 ml"
pai.nurse(45)
pai.showVolOfMilk()

print "pai touch"
print pai.touch()




