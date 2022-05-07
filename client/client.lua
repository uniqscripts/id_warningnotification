function Notify(bool, message)
	SendNUIMessage({
		type = "sendnotification",
		status = bool,
	})

	SendNUIMessage({action = 'message', value = message})
end

RegisterNetEvent("id_warningnotification:notify")
AddEventHandler("id_warningnotification:notify", function(message, duration)
	Notify(false) -- disable the notification that is already being showed
	Notify(not display, message) -- show the new one
	Citizen.Wait(duration)
	Notify(false)
end)